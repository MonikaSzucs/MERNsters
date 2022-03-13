import React from 'react';

const Card = (props) => {
    const allData = props.allData

    // console.log("CARD HERE")
    // let cardItems;
    // if(typeof allData !== 'undefined' && allData !=null){
        // console.log("not undefined")
        // console.log(allData)
        // console.log(allData.id)
        // console.log(allData.title)
        // console.log(allData.link)

    //     cardItems = 
    //         <div>
    //             <div>{allData.id}</div>
    //             <div>{allData.title}</div>
    //             <div></div>{allData.link}
    //             {props.namingType}
    //         </div>
    // }
    // if (!props){
    //     return null;
    // }
    
    // return cardItems;
    return (
            <div>
                 <div>{allData.id}</div>
                 <div>{allData.title}</div>
                 <div></div>{allData.link}
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
            </div>
    )
    
}

export default Card