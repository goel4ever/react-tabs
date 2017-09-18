import React, {Component} from 'react';
import './tabs.css';

class Tabs extends Component {
	state = {
		activeIndex: 0
	}
	selectTabIndex(activeIndex) {
		this.setState({activeIndex});
	}
	renderTabs() {
		const { data } = this.props;
		return data.map((tab, index) => {
			const isActive = this.state.activeIndex === index;
			return (
				<div key={index} className={isActive ? 'tab active' : 'tab'}
					onClick={() => this.selectTabIndex(index)}
				>
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
		return (
			<div className="Tabs">
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

export default Tabs;