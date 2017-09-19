import React, {Component} from 'react';
import './tabs.css';

class Tabs extends Component {
	constructor() {
		super();
		this.state = {
			activeIndex: 0
		}
	}
	componentWillMount() {
		console.log(this.props.position);
	}
	selectTabIndex(activeIndex) {
		this.setState({activeIndex});
	}
	renderTabs() {
		const { data } = this.props;
		return data.map((tab, index) => {
			const isActive = this.state.activeIndex === index;
			return (
				<div
					key={index}
					className={isActive ? 'tab active' : 'tab'}
					onClick={() => this.selectTabIndex(index)}>
					{tab.label}
				</div>
			);
		});
	}
	renderPanel() {
		const { data } = this.props;
		const { activeIndex } = this.state;

		return (
			<div className="panel">{data[activeIndex].content}</div>
		);
	}
	render() {
		const tabsClass = 'Tabs ' + (this.props.position === 'LEFT' ? 'left' : '');
		return (
			<div className={tabsClass}>
				<div className="tabs">
					{this.renderTabs()}
				</div>
				<div className="panels">
					{this.renderPanel()}
				</div>
			</div>
		);
	}
}

Tabs.defaultProps = {
	position: 'TOP'
}

export default Tabs;