import React, {Component} from 'react';
import 'react-dynamic-charts/dist/index.css'; // Don't forget to import the styles
import {DynamicBarChart} from 'react-dynamic-charts';


class BarApp extends Component {
    state = {
        data: [
            {
                "name": "My Top performing courses",
                "values": [
                    {
                        "id": 1,
                        "label": "Software engineering",
                        "value": 95,
                        "color": ["#01579B", "#023046"]
                    },
                    {
                        "id": 2,
                        "label": "Linear Algebra and Multivariable Calculus",
                        "value": 95,
                        "color": ["#01579B", "#023046"]
                    },

                    {
                        "id": 3,
                        "label": "Short Programming Project",
                        "value": 90,
                        "color": ["#01579B", "#023046"]
                    },

                    {
                        "id": 4,
                        "label": "Advanced Algorithms and Data Structures",
                        "value": 90,
                        "color": ["#01579B", "#023046"]
                    },

                    {
                        "id": 5,
                        "label": "Research Skills in Computing Science",
                        "value": 90,
                        "color": ["#01579B", "#023046"]
                    },

                    {
                        "id": 6,
                        "label": "Discrete Structures",
                        "value": 90,
                        "color": ["#01579B", "#023046"]
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <div className="BarGraph">
                <DynamicBarChart data={this.state.data}/>
            </div>
        );
    }

}

export default BarApp;