import React from 'react';

export default class HistoryEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    render() {
        const { listItems } = this.props;
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header bg-info'>Search History</div>
                <div className='card-body'>
                    <table className='table table-sm table-hover'>
                        <tbody>
                            {listItems.map(listItem => {
                                return <tr key={listItem.time}>
                                        <td>{listItem.name}</td>
                                        <td>
                                            <p> {listItem.time.slice(0,10)} </p>
                                            <p> {listItem.time.slice(11,19)} </p>
                                        </td>
                                    </tr> 
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}