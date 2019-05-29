import {Card} from 'antd';
import devBG from '../../public/dev.jpg';
let dev = (
	<Card bordered={false} style={{ marginBottom: 24 }} >
		<div style={{ textAlign: 'center', lineHeight: 13, fontSize: 20 }}>
			<img src={devBG}/><br/>研发中，尽情期待......
		</div>
	</Card>
)
export default () => {
	return dev
}
export {dev};