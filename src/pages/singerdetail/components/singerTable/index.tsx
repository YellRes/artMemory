import React from 'react';
import { Space, Table } from 'antd'

// 1-1. 姓名 singerName
// 1-2. 描述 singerDescription
// 1-3. 所有的数据 dataArr

// 2-1. 编辑 onModify
// 2-2. 删除 onDelete


// 表格的配置
const columns = [
  {
    title: '姓名',
    dataIndex: 'singerName',
    key: 'singerName'
  },
  {
    title: '描述',
    dataIndex: 'singerDescription',
    key: 'singerDescription'
  },
  {
    title: '操作',
    key: 'operation',
    render: () => (
      <Space size="middle">
        <a>查看</a>
        <a>删除</a>
      </Space>
    )
  }
]


const singerTable = (props: any) => {

  const { singerArr } = props
  return (
    <Table columns={columns} dataSource={singerArr} />
  )
}

export default singerTable



