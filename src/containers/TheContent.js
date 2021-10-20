import React, { Suspense } from 'react'
import {
  Redirect,
  Switch
} from 'react-router-dom'
import { CContainer } from '@coreui/react'
import { useSelector} from 'react-redux'
// routes config
import {PrivateRoute} from 'src/routing'
import { routes } from '../routes'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const TheContent = (props) => {
  const status = useSelector(state => state.auth.user?.status)
  const permitedRoute =routes.map(route=>{
    if(route.permissions?.includes(status)){
      return route
  }
})
const allRoutes =permitedRoute.filter(route=>route!==undefined)
 // const routes = props.routes
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {allRoutes.map((route, idx) => {
              return route.component && (
                <PrivateRoute
                {...route}
                  key={idx} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
