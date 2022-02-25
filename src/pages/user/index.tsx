import {Button} from 'antd'
import{Link, useHistory} from 'umi'

const Index = ()=>{
    const history = useHistory();
    return (
        <>
            <Link to="/userinfo">Link</Link>
            <Button type="primary" onClick={() => {history.push('/userinfo')}}>to userInfo</Button>
        </>
    )
}
export default Index