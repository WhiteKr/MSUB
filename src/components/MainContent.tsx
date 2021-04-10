import React from 'react';
import '../styles/MainContent.css';

class MainContent extends React.Component {
	render() {
		return (
			<div className="MainContent">
				<a id="title">청소년이 디자인하고, 개발하고, 운영합니다</a>
				<a id="content">
					<b>MSUB</b>은 청소년 프로그래밍 팀으로서<br/>
					재무, 인사, 프로그래밍, 디자인 등 모든 업무를<br/>
					청소년들이 처리하며,<br/>
					새로운 문화를 만들어 나가기 위해 노력하고 있습니다<br/>
				</a>
			</div>
		)
	}
}

export default MainContent;