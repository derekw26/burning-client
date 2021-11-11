import React from 'react';
import Seatmap from 'react-seatmap';
import Plane from './Plane';

class Seatmapping extends Component {
    render() {
        return(
            <Seatmap rows = { rows } maxReservableSeats = { 3} alpha />
        )}
}

export default Seatmapping

