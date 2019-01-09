import {SearchBar, WingBlank} from 'antd-mobile';

class Hello extends React.Component {
  state = {
    value: '搜索',
  };
  onChange = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <div>
        <WingBlank>
          <div>搜索</div>
        </WingBlank>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          className="sub-title"
          // onSubmit={value => console.log(value, 'onSubmit')}
          // onClear={value => console.log(value, 'onClear')}
          // onFocus={() => console.log('onFocus')}
          // onBlur={() => console.log('onBlur')}
          // onCancel={() => console.log('onCancel')}
          showCancelButton={false}
          onChange={this.onChange}/>
      </div>
    );
  }
}

export default Hello;