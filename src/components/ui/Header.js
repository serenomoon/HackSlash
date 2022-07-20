import React from 'react'
import { Link } from 'react-router-dom';


export const Header = ({title}) => {
  return (
    <div class="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="container text-center pt-5 pb-3">
                <h1 class="display-4 text-white animated slideInDown mb-3">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                        {/* <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li> */}
                        <li class="breadcrumb-item text-primary active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
  )
}
