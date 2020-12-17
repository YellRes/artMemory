import React, {MouseEvent} from 'react';
import { Space, Table } from 'antd'

// 1-1. 姓名 singerName
// 1-2. 描述 singerDescription
// 1-3. 所有的数据 dataArr

// 2-1. 编辑 onModify
// 2-2. 删除 onDelete

interface singer {
  singerName?: string,
  singerDescription?: string
  singerImg?: string
}

interface tableProps {
  singerArr: Array<singer>,
  onDelete: (e: MouseEvent<HTMLElement>, colObj: Object) => void,
  onModify: (e: MouseEvent<HTMLElement>, colObj: Object) => void,
}

const singerTable = (props: tableProps) => {

  const { 
    singerArr = [],
    onDelete = () => {},
    onModify = () => {}
  } = props
  const { Column } = Table
  return (
    <Table dataSource={singerArr} >

      <Column title="姓名" dataIndex="singerName" key="singerName"/>
      <Column title="描述" dataIndex="singerDescription" key="singerDescription"/>
      <Column
        title="Action"
        key="action"
        render={(text, record: any) => (
          <Space size="middle">
            <a onClick={(e) => onModify(e, record)}>查看</a>
            <a onClick={(e) => onDelete(e, record)}>删除</a>
          </Space>
        )}
      />
    </Table>
  )
}

export default singerTable



