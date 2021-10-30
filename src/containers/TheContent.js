import React, { Suspense } from 'react'
import {
  Redirect,
  Switch
} from 'react-router-dom'
import { CContainer } from '@coreui/react'
// routes config
import {PrivateRoute} from 'src/routing'
import { routes } from '../routes'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const TheContent = (props) => {
 // const routes = props.routes
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
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
