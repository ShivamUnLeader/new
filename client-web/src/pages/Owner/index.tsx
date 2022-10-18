import * as React from 'react'
import {useStoreState} from '../../store'
import {useHistory} from 'react-router-dom'
import * as http from '../../http'

export default function Owner() {
  const owner = useStoreState((state) => state.owner)
  const [loading, setLoading] = React.useState(false)
  const history = useHistory()
  React.useEffect(() => {
    if (!owner.firstName) {
      history.push('/')
    } else {
      setLoading(true)
      http.getApps()
        .then(result => {
          console.log('getApps ', result.data)
          if (!result.data.Apps.length) {
            history.push('/owner/create-app')
          }
        })
    }
  }, [owner])

  return <div>
    Owner Page
  </div>
}