import {Button} from 'antd'
import{Link, useHistory, useModel} from 'umi'

const Index = ()=>{
    const history = useHistory();
    //https://umijs.org/zh-CN/plugins/plugin-initial-state
    const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');// useModel获取初始值
    return (
        <>
            {initialState?.id}
            <br />
            <Link to="/userinfo">Link</Link>
            <br />
            <Button type="primary" onClick={() => {history.push('/userinfo')}}>to userInfo</Button>
        </>
    )
}
export default Index;