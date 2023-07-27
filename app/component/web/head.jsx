import Head from "next/head";

export default function web_Head({title, content}){
     return(
          <Head>
               <meta charset="UTF-8"/>
               <meta name="description" content={content} />
               <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
               <link rel="stylesheet" href="../../styles/index.css"/>
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
               <link rel="preconnect" href="https://fonts.googleapis.com"/>
               <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
               <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>
          </Head>
     )
}