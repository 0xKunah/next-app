import React from 'react';
import Head from "next/head"


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills : [],
            projects: [],
            sites: [],
            games: []
        }
    }

    render (){
        return (
            <>
                <Head>
                    <title>Site</title>
                    <meta property="og:title" content="Site"/>
                    <meta name="title" content="Site"/>
                    <meta property="twitter:title" content="Site"/>                
                </Head>
                <h1>Welcome to your site</h1>
            </>
        )
    }
}