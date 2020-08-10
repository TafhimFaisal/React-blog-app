import React from 'react'
import SideBar from '../partials/SideBar'

export default function RightSideBar(props) {
    return (
        <div className="container">
              
              <div className="row">
                <div className="col s8">
                  {props.component}
                </div>
                <div className="col s4">
                  <SideBar />
                </div>
              </div>

            </div>
    )
}
