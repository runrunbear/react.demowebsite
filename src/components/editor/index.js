import React, { Component } from 'react'
import GoogleMapConfig from "../../configs/googlemap.config";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Editor extends Component {
	render() {
		return (

			<Map google={this.props.google} zoom={14}
				style={{ top: '2em', width: '100%', height: '100%', position: 'relative' }}
				className={'map'}
			>

				<Marker
					title={'The marker`s title will appear as a tooltip.'}
					name={'SOMA'}
					position={{ lat: 37.778519, lng: -122.405640 }} />
				<Marker
					name={'Dolores park'}
					position={{ lat: 37.759703, lng: -122.428093 }} />
				<Marker />

				<Marker onClick={this.onMarkerClick}
					name={'Current location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
						<h1>Hello</h1>
					</div>
				</InfoWindow>
			</Map>

		)
	}
}

export default GoogleApiWrapper({
	apiKey: (GoogleMapConfig.googleMapKey)
})(Editor)



