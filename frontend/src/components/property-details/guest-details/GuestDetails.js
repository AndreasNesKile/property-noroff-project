import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './GuestDetails.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class GuestDetails extends Component {
	state = {
		// 	images: [
		// 		{
		// 			id: 1,
		// 			src: 'https://i.imgur.com/sVXbEbh.png',
		// 			text: 'Utsiden av huset'
		// 		},
		// 		{
		// 			id: 2,
		// 			src: 'https://i.imgur.com/FHtQbYT.png',
		// 			text: 'Innsiden av huset'
		// 		}
		// 	],
		position: [51.505, -0.09],
		showQrCode: false
	};

	render() {
		return (
			<section className="guest-details text-center mb-4 pb-5">
				<Container className="mt-5 carousel-container container-fluid">
					<Row>
						<Col>
							<Carousel className="carousel-img" id="carousel">
								{this.props.property.propertyImages.map((img, index) => (
									<Carousel.Item key={index}>
										<img src={img.url} className=" img-carousel" alt={img.caption} />
										<Carousel.Caption>
											<h4>{img.caption}</h4>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>
							<h2 className="pt-4">{this.props.property.name ? this.props.property.name : ''}</h2>
						</Col>
					</Row>
				</Container>
				<Container className="container-fluid pb-2 guest-info-container">
					<Row className="leaflet-row">
						<Container>
							<Row className="d-flex justify-content-center">
								<span className="m-4">
									<span className="type-style">Type: </span>
									{this.props.property.propertyType ? this.props.property.propertyType : 'N/A'}
								</span>
								<span className="m-4">
									<span className="type-style">City: </span>
									{this.props.property.city ? this.props.property.city : 'N/A'}
								</span>
								<span className="m-4">
									<span className="type-style">Address: </span>
									{this.props.property.line_1 ? this.props.property.line_1 : ''}
								</span>
							</Row>
						</Container>
						<Col xs={12} className="d-flex justify-content-around dark-bg leaflet-col">
							<Map center={this.state.position} zoom={19} className="leaflet-map">
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={this.state.position}>
									<Popup>
										{this.props.property.line_1
											? this.props.property.line_1 + ' ' + this.props.property.line_2
											: ''}
									</Popup>
								</Marker>
							</Map>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
