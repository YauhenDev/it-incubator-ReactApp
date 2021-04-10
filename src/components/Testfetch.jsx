//RCC выбрать структуру
import React from 'react'


class Testfetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		//fetch("/test.json")
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						//items: result.items
						data: result
					  });
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		//const { error, isLoaded, items } = this.state;
		const { error, isLoaded, data } = this.state;
		if (error) {
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
			//debugger;
			return (
				<>
					<h1>Получаем фэйк данные и выводим их </h1>
					<h6>https://jsonplaceholder.typicode.com/users </h6>
					<ul>
						{/* {items.map(item => ( */}
						{data.map(item => (
							<li key={item.id}>
								{item.username}: {item.name}<br />
								{item.email}<br />

								{item.address.city}: 
								{item.address.zipcode} 
								{item.address.street}<br />
								GEO: {item.address.geo.lat}, {item.address.geo.lng}
							</li>
						))}
					</ul>
				</>
			);
		}
	}
}

export default Testfetch;