import {makeAutoObservable, runInAction} from 'mobx';
import { Alert } from 'react-native';
import { httpGet, httpPost } from '../config/apiService';
import {
    etherTransferURL,
    itemTransferURL,
    tokenEtherBalanceURL,
    tokenTransferURL,
    transactionURL
} from '../config/routesConstants';
import {insertTransaction} from '../components/realmModels/transaction';
import { RootStore } from './context';
import { coinsMainName } from '../../docs/config';
import { showToast } from '../components/Toast/toast';

export class WalletStore{
    isFetching = false;
    error = false;
    errorMessage = '';
    transactions:any= [];
    anotherUserTransaction:[]= [];
    anotherUserBalance:[]= [];
    balance= [];
    offset= 0;
    limit= 10;
    total= 0;
    tokenTransferSuccess: {
      success: boolean,
      senderName: string,
      receiverName: string,
      amount: number,
      receiverMessageId: string,
      tokenName: string
    }={
        success: false,
        senderName: '',
        receiverName: '',
        amount: 0,
        receiverMessageId: '',
        tokenName: ''
    };
    stores:RootStore={};
    defaultUrl = ''
    coinBalance: []=[];

    constructor(stores:RootStore){
        makeAutoObservable(this);
        this.stores = stores;
        this.defaultUrl = stores.apiStore.defaultUrl
    }

    setInitialState(){
        this.isFetching = false;
        this.error = false;
        this.errorMessage = '';
        this.transactions= [];
        this.anotherUserTransaction= [];
        this.anotherUserBalance= [];
        this.balance= [];
        this.offset= 0;
        this.limit= 10;
        this.total= 0;
        this.tokenTransferSuccess= {
            success: false,
            senderName: '',
            receiverName: '',
            amount: 0,
            receiverMessageId: '',
            tokenName: ''
        };
        this.stores={};
        this.defaultUrl = ''
        this.coinBalance=undefined;
    }

    async fetchWalletBalance(walletAddress:string, token:string, isOwn:boolean){
        if(!walletAddress||!token||!isOwn){
            showToast(
                'error',
                'Error',
                'Args miss for Fetch bal',
                'top'
            )
        }
        let url = this.defaultUrl + tokenEtherBalanceURL + walletAddress;
        runInAction(()=>{
            this.isFetching = true;
        })
        try{
            const response = await httpGet(url, token);
            runInAction(()=>{
                this.isFetching = false;
            })
            this.stores.debugStore.addLogsApi(response.data);
            
            if(isOwn){
                runInAction(()=>{
                    this.balance = response.data.balance
                    this.coinBalance = response.data.balance.map(item => {
                        if(item.tokenName === coinsMainName){
                            return item.balance;
                        }
                    })
                })
            }else{
                runInAction(()=>{
                    this.anotherUserBalance = response.data;
                })
            }
        }catch(error:any){
            runInAction(()=>{
                this.stores.debugStore.addLogsApi(error);
                this.isFetching = false;
                this.error = true
                this.errorMessage = error
            })
        }
    }

    async transferTokens(
        bodyData:any,
        token:string,
        fromWallet:string,
        senderName:string,
        receiverName:string,
        receiverMessageId:string,
        itemUrl:string
    ){
        console.log(bodyData,"body data for token transfer")
        let url = '';
        if(bodyData.tokenName && !itemUrl){
            url = this.defaultUrl + tokenTransferURL;
        }else if(itemUrl){
            url = this.defaultUrl + itemTransferURL;
        }else{
            url = this.defaultUrl + etherTransferURL;
        }

        if(bodyData.nftId){
            Alert.alert(
                'item transfer',
                `You have successfully sent ${bodyData.tokenName}. After confirming the blockchain transaction, it will appear in the recipient's profile.`,
                [{text: 'Ok', onPress: () => console.log('ok')}],
            )
        }

        runInAction(()=>{
            this.isFetching = true;
        })
        
        try{
            const response = await httpPost(url, bodyData, token)

            runInAction(()=>{
                this.isFetching = false;
                this.stores.debugStore.addLogsApi(response.data);
            })
            
            if(response.data.success){
                runInAction(()=>{
                    this.tokenTransferSuccess = {
                        success: true,
                        senderName,
                        receiverName,
                        amount: bodyData.amount,
                        receiverMessageId,
                        tokenName: bodyData.tokenName
                    }
                })

                this.fetchWalletBalance(fromWallet, null, token, true);
            }else{
                runInAction(()=>{
                    this.error = true;
                    this.errorMessage = response.data.msg;
                })
                
            }
        }catch(error:any){
            runInAction(()=>{
                this.isFetching = false;
                this.error = true;
                this.errorMessage = error;
            })

            showToast('error','Error', JSON.stringify(error), 'top');
        }
    }

    async fetchTransaction(
        walletAddress:string,
        token:string,
        isOwn:boolean,
        limit:number,
        offset:number
    ){
        let url = this.defaultUrl + transactionURL +
        'walletAddress=' +
        walletAddress +
        `&limit=${limit}&offset=${offset}`;
        if(!walletAddress) return;

        try{
            const response = await httpGet(url, null);
            console.log(response,"sadfdsaf")
            if(response.data.items){
                this.stores.debugStore.addLogsApi(response.data);
                this.offset = this.offset + response.data.limit;
                this.total = response.data.total;
                if(isOwn){
                    runInAction(()=>{
                        this.transactions = [...this.transactions, ...response.data.items];
                    })
                    // insertTransaction(response.data.items);
                }else{
                    runInAction(()=>{
                        this.anotherUserTransaction = [...this.anotherUserTransaction, ...response.data.items];
                    })
                }
            }
        }catch(error){
            runInAction(()=>{
                this.stores.debugStore.addLogsApi(error)
                this.error = true;
                this.errorMessage = JSON.stringify(error);
            })
        }
    }

    //clear pagination data
    clearPaginationData(){
        runInAction(()=>{
            this.offset = 0;
            this.limit = 10;
            this.total = 0;
            this.anotherUserTransaction = [];
        })
    }

    //set the offset for retrieving transaction data
    setOffset(value:number){
        runInAction(()=>{
            this.offset = value
        })
    }

    setTotal(value:number){
        runInAction(()=>{
            this.total = value
        })
    }
}