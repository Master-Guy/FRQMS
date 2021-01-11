const styles = StyleSheet.create(
    {
        html, head, body, #root {
            margin: 0px;
            padding: 0px;
            height: 100%;
            width: 100%;
            background-color: #141516;
            color: #d8d4cf;
        }
        
        .root {
            height: 100%;
            width: 100%;
            background-color: #505050;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-self: stretch;
        }
        
        .menu {
            margin: 0px;
            padding: 0px;
            border-right: .5rem solid #d65050;
            width: 180px;
            height: 100%;
            order: 1;
            flex: 0 1 auto;
            text-align: center;
        }
        
        .menuLogo {
            width: 80%;
            display: block;
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        .mainContent {
            order: 2;
            flex: 1 1 auto;
            background-color: #202020;
            padding-top: 100px;
            padding-left: 100px;
        }    
    }
);