import React from 'react';
import Seatmap from 'react-seatmap';

class Seatmapping extends Component {
    render() {
        return(
            <Seatmap rows = { rows } maxReservableSeats = { 3} alpha />
        )}
}

export default Seatmapping

