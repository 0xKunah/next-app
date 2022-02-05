import { Component } from 'react';

import $ from 'jquery'
import Link from 'next/link'
import Head from 'next/head'

export default class Topbar extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        return (
            <>

                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#3b82f6" />
                    <meta name="description" content="Main site of a young web developer, here you can find all my projects"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://kunah.fr/"/>
                    <meta property="og:description" content="Main site of a young web developer, here you can find all my projects"/>
                    <meta property="og:image" content="https://kunah.fr/background.png"/>
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://kunah.fr/"/>
                    <meta property="twitter:description" content="Main site of a young web developer, here you can find all my projects"/>
                    <meta property="twitter:image" content="https://kunah.fr/background.png"/>
                </Head>

                <div id="topbar" className={'overflow-auto z-30 sticky top-0 w-full h-12 flex items-center px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'}>
                    {this.props.page === "/" ? <p id="home" onClick={()=>{$('#container').animate({scrollTop:0}, '500'); }}><img alt='Kunah logo' width={"32px"} height={'32px'} src={'/kunah.png'}/><p className={'ml-2'}>Home</p></p>
                        : <Link href="/"><a id="home"><img alt='Kunah logo' width={"32px"} height={'32px'} src={'/kunah.png'}/><p className={'ml-2'}>Home</p></a></Link>
                    }
                    <div className={"flex-grow"}></div>
                    {this.props.page === "/" ? <p onClick={()=>{$('#container').animate({scrollTop:921}, '500'); }}>About me</p>
                        : <Link href="/"><a>About me</a></Link>
                    }
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </>
        )
    }
}