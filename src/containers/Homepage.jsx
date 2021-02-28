import React from 'react';
import text from './staticText'


let listOfTech = text.tech.techList.map((tech) => {
    return (
        <React.Fragment>
            <div className="tools">
                <span>{tech.tool}</span> :  <span>{tech.years} years</span>
            </div>
        </React.Fragment>
    )
} )

const HomePage = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <h1 className="headers__title">{text.name}</h1>
            <h1 className="headers__title">{text.title}</h1>
            <h1 className="headers__title">{text.tech.techText}</h1>
        {listOfTech}
        </React.Fragment>
        ) 
}

export default HomePage;


// var App = React.createClass({
//     render: function () {
//         var people = data.content.people.map(function (person) {
//             return <div>{person.name}</div>;
//         });

//         return <div>{people}</div>;
//     },
// });