const verticalStyle = `{{ width: 360 }}`;

export const componentDocs = [
  {
    name: 'Input',
    title: 'Input 输入框',
    category: '数据录入',
    spec: '数据录入/Input.dev.md',
    summary: '用于录入单行文本、密码、搜索条件和多行说明。',
    variants: ['基础输入框', '前后缀输入框', '搜索框', '密码框', 'Textarea', '禁用与校验状态'],
    basic: `<Input placeholder="请输入客户名称" />`,
    advanced: `<Space direction="vertical" style=${verticalStyle}>
      <Input.Search placeholder="搜索客户" enterButton />
      <Input.Password placeholder="请输入密码" />
      <Input.TextArea rows={3} showCount maxLength={100} placeholder="请输入说明" />
      <Input status="error" placeholder="校验失败状态" />
    </Space>`,
  },
  {
    name: 'InputNumber',
    title: 'InputNumber 数字输入框',
    category: '数据录入',
    spec: '数据录入/InputNumber.dev.md',
    summary: '用于录入金额、数量、比例等具有明确数值范围的数据。',
    variants: ['基础数值', '范围限制', '步进值', '前后缀', '禁用与校验状态'],
    basic: `<InputNumber min={0} max={100} defaultValue={20} />`,
    advanced: `<Space>
      <InputNumber min={0} max={100} addonAfter="%" defaultValue={36} />
      <InputNumber status="warning" placeholder="请输入额度" />
      <InputNumber disabled defaultValue={1000} />
    </Space>`,
  },
  {
    name: 'Select',
    title: 'Select 选择器',
    category: '数据录入',
    spec: '数据录入/Select.dev.md',
    summary: '用于从一组明确选项中选择单个或多个值。',
    variants: ['单选', '多选', '可搜索', '标签模式', '禁用与校验状态'],
    basic: `<Select
      style={{ width: 240 }}
      placeholder="请选择业务类型"
      options={[{ label: '财富管理', value: 'wealth' }, { label: '资产配置', value: 'asset' }]}
    />`,
    advanced: `<Space direction="vertical" style=${verticalStyle}>
      <Select mode="multiple" placeholder="请选择标签" options={[{ label: '重点', value: 'important' }, { label: '跟进中', value: 'following' }]} />
      <Select showSearch status="error" placeholder="可搜索的错误状态" options={[{ label: '上海', value: 'shanghai' }, { label: '北京', value: 'beijing' }]} />
    </Space>`,
  },
  {
    name: 'DatePicker',
    title: 'DatePicker 日期选择器',
    category: '数据录入',
    spec: '数据录入/DatePicker.dev.md',
    summary: '用于选择日期、日期范围、月份、季度或年份。',
    imports: ['DatePicker', 'Space'],
    variants: ['日期', '日期范围', '月份', '季度', '年份', '禁用与校验状态'],
    basic: `<DatePicker placeholder="请选择日期" />`,
    advanced: `<Space direction="vertical">
      <DatePicker.RangePicker />
      <Space><DatePicker picker="month" /><DatePicker picker="quarter" /><DatePicker picker="year" /></Space>
    </Space>`,
  },
  {
    name: 'TimePicker',
    title: 'TimePicker 时间选择器',
    category: '数据录入',
    spec: '数据录入/TimePicker.dev.md',
    summary: '用于选择时间点或时间范围。',
    variants: ['时间点', '时间范围', '格式化', '禁用与校验状态'],
    basic: `<TimePicker placeholder="请选择时间" />`,
    advanced: `<Space><TimePicker format="HH:mm" /><TimePicker.RangePicker /></Space>`,
  },
  {
    name: 'Cascader',
    title: 'Cascader 级联选择',
    category: '数据录入',
    spec: '数据录入/Cascader.dev.md',
    summary: '用于从多层级关联数据中逐级选择。',
    variants: ['单选', '多选', '可搜索', '禁用选项', '加载状态'],
    basic: `<Cascader
      placeholder="请选择机构"
      options={[{ value: 'east', label: '华东', children: [{ value: 'shanghai', label: '上海' }] }]}
    />`,
    advanced: `<Cascader
      multiple
      style={{ width: 320 }}
      placeholder="请选择多个机构"
      options={[{ value: 'east', label: '华东', children: [{ value: 'shanghai', label: '上海' }, { value: 'hangzhou', label: '杭州' }] }]}
    />`,
  },
  {
    name: 'TreeSelect',
    title: 'TreeSelect 树选择',
    category: '数据录入',
    spec: '数据录入/TreeSelect.dev.md',
    summary: '用于从树形层级数据中选择一个或多个节点。',
    variants: ['单选', '多选', '可勾选', '搜索', '禁用节点'],
    basic: `<TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] }]}
    />`,
    advanced: `<TreeSelect
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_PARENT}
      style={{ width: 320 }}
      placeholder="请选择组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }, { title: '运营部', value: 'ops' }] }]}
    />`,
  },
  {
    name: 'Checkbox',
    title: 'Checkbox 多选框',
    category: '数据录入',
    spec: '数据录入/Checkbox.dev.md',
    summary: '用于在多个独立选项中选择任意数量的值。',
    variants: ['基础多选', '多选组', '全选与半选', '禁用状态'],
    basic: `<Checkbox defaultChecked>接收风险提醒</Checkbox>`,
    advanced: `<Checkbox.Group options={['重点客户', '高净值客户', '机构客户']} defaultValue={['重点客户']} />`,
  },
  {
    name: 'Radio',
    title: 'Radio 单选框',
    category: '数据录入',
    spec: '数据录入/Radio.dev.md',
    summary: '用于在互斥选项中选择一个值。',
    variants: ['基础单选', '单选组', '按钮样式', '禁用状态'],
    basic: `<Radio.Group options={['稳健型', '平衡型', '进取型']} defaultValue="稳健型" />`,
    advanced: `<Radio.Group optionType="button" buttonStyle="solid" options={['日', '周', '月']} defaultValue="月" />`,
  },
  {
    name: 'Switch',
    title: 'Switch 开关',
    category: '数据录入',
    spec: '数据录入/Switch.dev.md',
    summary: '用于立即切换两个互斥状态。',
    variants: ['基础开关', '文字开关', '加载状态', '禁用状态'],
    basic: `<Switch defaultChecked />`,
    advanced: `<Space><Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked /><Switch loading /><Switch disabled /></Space>`,
  },
  {
    name: 'Slider',
    title: 'Slider 滑动输入条',
    category: '数据录入',
    spec: '数据录入/Slider.dev.md',
    summary: '用于在连续或分段范围内选择数值。',
    variants: ['单值', '范围', '刻度', '禁用状态'],
    basic: `<Slider defaultValue={36} />`,
    advanced: `<div style={{ width: 360 }}><Slider range marks={{ 0: '0%', 50: '50%', 100: '100%' }} defaultValue={[20, 80]} /></div>`,
  },
  {
    name: 'Upload',
    title: 'Upload 上传',
    category: '数据录入',
    spec: '数据录入/Upload.dev.md',
    summary: '用于上传文件、图片和附件。',
    imports: ['Upload', 'Button'],
    variants: ['按钮上传', '拖拽上传', '图片列表', '上传状态'],
    basic: `<Upload><Button>选择文件</Button></Upload>`,
    advanced: `<Upload.Dragger style={{ width: 420 }}><p>点击或拖拽文件到此区域上传</p><p>支持单个或批量上传</p></Upload.Dragger>`,
  },
  {
    name: 'Card',
    title: 'Card 卡片',
    category: '数据展示',
    spec: '全局规范/Container.style.md',
    summary: '用于承载一组相关信息和操作。',
    imports: ['Card', 'Button'],
    variants: ['基础卡片', '带标题', '带操作', '加载状态'],
    basic: `<Card title="客户概览" style={{ width: 360 }}>当前客户资产规模为 1,280 万元。</Card>`,
    advanced: `<Card title="审批任务" extra={<Button type="link">查看全部</Button>} style={{ width: 360 }} loading={false}>待处理任务 18 项</Card>`,
  },
  {
    name: 'Avatar',
    title: 'Avatar 头像',
    category: '数据展示',
    spec: '样式规范/Avatar  头像样式.md',
    summary: '用于展示用户、机构或对象的头像标识。',
    variants: ['图片头像', '字符头像', '方形头像', '组合头像'],
    basic: `<Space><Avatar>张</Avatar><Avatar shape="square">企</Avatar><Avatar size="large">VIP</Avatar></Space>`,
    advanced: `<Avatar.Group max={{ count: 3 }}><Avatar>A</Avatar><Avatar>B</Avatar><Avatar>C</Avatar><Avatar>D</Avatar></Avatar.Group>`,
  },
  {
    name: 'Badge',
    title: 'Badge 徽标数',
    category: '数据展示',
    spec: '样式规范/Badge  徽标数样式.md',
    summary: '用于标记数量、状态或待处理信息。',
    variants: ['数字徽标', '小红点', '状态点', '封顶数字'],
    basic: `<Space size="large"><Badge count={5}><span style={{ display: 'block', width: 40, height: 40, background: '#f4f6f8' }} /></Badge><Badge dot>消息</Badge></Space>`,
    advanced: `<Space><Badge status="success" text="运行中" /><Badge status="warning" text="待审核" /><Badge status="error" text="异常" /></Space>`,
  },
  {
    name: 'Carousel',
    title: 'Carousel 走马灯',
    category: '数据展示',
    spec: '样式规范/Carousel  走马灯样式.md',
    summary: '用于轮播展示同级内容。',
    variants: ['基础轮播', '自动播放', '切换箭头', '指示器位置'],
    basic: `<Carousel style={{ width: 420 }}><div><h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3></div><div><h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3></div></Carousel>`,
    advanced: `<Carousel autoplay dotPosition="bottom" style={{ width: 420 }}><div><h3 style={{ padding: 48, background: '#fffcf0' }}>重点产品</h3></div><div><h3 style={{ padding: 48, background: '#ebfaf5' }}>客户活动</h3></div></Carousel>`,
  },
  {
    name: 'Collapse',
    title: 'Collapse 折叠面板',
    category: '数据展示',
    spec: '样式规范/Collapse  折叠面板样式.md',
    summary: '用于分组收纳较长内容。',
    variants: ['基础面板', '手风琴', '无边框', '禁用面板'],
    basic: `<Collapse items={[{ key: '1', label: '客户基本信息', children: '展示客户身份和联系方式。' }, { key: '2', label: '风险评估', children: '展示风险等级和有效期。' }]} />`,
    advanced: `<Collapse accordion bordered={false} items={[{ key: '1', label: '资产概览', children: '总资产 1,280 万元。' }, { key: '2', label: '持仓明细', children: '共持有 12 项产品。' }]} />`,
  },
  {
    name: 'Descriptions',
    title: 'Descriptions 描述列表',
    category: '数据展示',
    spec: '样式规范/Descriptions  描述列表样式.md',
    summary: '用于展示对象的多个只读字段。',
    variants: ['基础描述', '带边框', '多列布局', '响应式'],
    basic: `<Descriptions items={[{ key: '1', label: '客户名称', children: '张先生' }, { key: '2', label: '风险等级', children: '稳健型' }]} />`,
    advanced: `<Descriptions bordered column={2} items={[{ key: '1', label: '客户编号', children: 'C-20260001' }, { key: '2', label: '所属机构', children: '上海分行' }, { key: '3', label: '资产规模', children: '1,280 万元' }]} />`,
  },
  {
    name: 'Image',
    title: 'Image 图片',
    category: '数据展示',
    spec: '样式规范/Image  图片样式.md',
    summary: '用于展示和预览图片资源。',
    variants: ['基础图片', '预览', '失败占位', '图片组'],
    basic: `<Image width={200} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" />`,
    advanced: `<Image.PreviewGroup><Space><Image width={120} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" /><Image width={120} src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" /></Space></Image.PreviewGroup>`,
  },
  {
    name: 'List',
    title: 'List 列表',
    category: '数据展示',
    spec: '样式规范/List  列表样式.md',
    summary: '用于按相同结构连续展示数据项。',
    variants: ['基础列表', '带头像', '带操作', '分页列表'],
    imports: ['List', 'Avatar'],
    basic: `<List bordered dataSource={['客户资料待补充', '风险评估即将到期', '资产配置方案待确认']} renderItem={(item) => <List.Item>{item}</List.Item>} />`,
    advanced: `<List dataSource={['张先生', '李女士']} renderItem={(item) => <List.Item><List.Item.Meta avatar={<Avatar>{item[0]}</Avatar>} title={item} description="重点客户" /></List.Item>} />`,
  },
  {
    name: 'Statistic',
    title: 'Statistic 统计数值',
    category: '数据展示',
    spec: '样式规范/Statistic  统计数值样式.md',
    summary: '用于突出展示统计指标和关键数值。',
    variants: ['基础数值', '前后缀', '精度', '倒计时'],
    basic: `<Statistic title="客户总资产" value={1280} suffix="万元" />`,
    advanced: `<Space size="large"><Statistic title="本月新增" value={36} prefix="+" /><Statistic title="转化率" value={18.6} precision={1} suffix="%" /></Space>`,
  },
  {
    name: 'Tag',
    title: 'Tag 标签',
    category: '数据展示',
    spec: '样式规范/Tag  标签样式.md',
    summary: '用于标记对象属性、分类和状态。',
    variants: ['基础标签', '状态色', '可关闭', '可选择'],
    basic: `<Space><Tag>默认</Tag><Tag color="success">已完成</Tag><Tag color="warning">待审核</Tag><Tag color="error">异常</Tag></Space>`,
    advanced: `<Space><Tag closable>重点客户</Tag><Tag.CheckableTag checked>已选标签</Tag.CheckableTag></Space>`,
  },
  {
    name: 'Tooltip',
    title: 'Tooltip 文字提示',
    category: '数据展示',
    spec: '样式规范/Tooltip  文字提示样式.md',
    summary: '用于在悬停时解释图标、缩略文本或操作。',
    imports: ['Tooltip', 'Button'],
    variants: ['基础提示', '不同方向', '长文本', '受控显示'],
    basic: `<Tooltip title="查看客户详情"><Button>悬停查看</Button></Tooltip>`,
    advanced: `<Space><Tooltip placement="top" title="顶部提示"><Button>Top</Button></Tooltip><Tooltip placement="right" title="右侧提示"><Button>Right</Button></Tooltip></Space>`,
  },
  {
    name: 'Popover',
    title: 'Popover 气泡卡片',
    category: '数据展示',
    spec: '样式规范/Popover  气泡卡片样式.md',
    summary: '用于展示比 Tooltip 更丰富的临时内容。',
    imports: ['Popover', 'Button'],
    variants: ['点击触发', '悬停触发', '带标题', '不同方向'],
    basic: `<Popover title="客户信息" content="稳健型客户，资产规模 1,280 万元。"><Button>查看信息</Button></Popover>`,
    advanced: `<Popover trigger="click" content={<div><p>待处理审批：3</p><p>待回访客户：8</p></div>}><Button>工作提醒</Button></Popover>`,
  },
  {
    name: 'Tour',
    title: 'Tour 漫游式引导',
    category: '数据展示',
    spec: '样式规范/Tour  漫游式引导样式.md',
    summary: '用于分步骤引导用户了解关键功能。',
    imports: ['Tour', 'Button'],
    extraImports: `import { useRef, useState } from 'react';`,
    variants: ['基础引导', '步骤切换', '遮罩', '非模态引导'],
    basic: `{(() => {
      const [open, setOpen] = useState(false);
      const ref = useRef(null);
      return <><Button ref={ref} onClick={() => setOpen(true)}>开始引导</Button><Tour open={open} onClose={() => setOpen(false)} steps={[{ title: '客户检索', description: '通过条件快速查找客户。', target: () => ref.current }]} /></>;
    })()}`,
    advanced: `<Tour open={false} steps={[]} />`,
  },
  {
    name: 'Alert',
    title: 'Alert 警告提示',
    category: '反馈',
    spec: '反馈/AntdAlert.md',
    summary: '用于在页面中展示持续可见的状态和风险提示。',
    variants: ['成功', '信息', '警告', '错误', '可关闭'],
    basic: `<Alert message="客户资料保存成功" type="success" showIcon />`,
    advanced: `<Space direction="vertical" style={{ width: '100%' }}><Alert message="配置将在发布后生效" type="info" showIcon /><Alert message="风险评估即将到期" description="请在 7 天内完成重新评估。" type="warning" showIcon closable /></Space>`,
  },
  {
    name: 'Modal',
    title: 'Modal 对话框',
    category: '反馈',
    spec: '反馈/AntdModal.md',
    summary: '用于需要用户确认或集中处理的阻断式任务。',
    imports: ['Modal', 'Button'],
    extraImports: `import { useState } from 'react';`,
    variants: ['基础对话框', '确认对话框', '异步关闭', '自定义底部'],
    basic: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button type="primary" onClick={() => setOpen(true)}>打开对话框</Button><Modal title="确认提交" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>提交后将进入审批流程。</Modal></>;
    })()}`,
    advanced: `<Button onClick={() => Modal.confirm({ title: '确认删除客户记录？', content: '删除后无法恢复。' })}>确认对话框</Button>`,
  },
  {
    name: 'Drawer',
    title: 'Drawer 抽屉',
    category: '反馈',
    spec: '反馈/AntdDrawer.md',
    summary: '用于在不离开当前页面的情况下查看详情或完成编辑。',
    imports: ['Drawer', 'Button'],
    extraImports: `import { useState } from 'react';`,
    variants: ['右侧抽屉', '不同尺寸', '多层抽屉', '带操作区'],
    basic: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>查看客户详情</Button><Drawer title="客户详情" open={open} onClose={() => setOpen(false)}>客户资产和持仓信息。</Drawer></>;
    })()}`,
    advanced: `<Drawer title="编辑资料" open={false} width={560} extra={<Button type="primary">保存</Button>} />`,
  },
  {
    name: 'Popconfirm',
    title: 'Popconfirm 气泡确认框',
    category: '反馈',
    spec: '反馈/AntdPopconfirm.md',
    summary: '用于对轻量但有风险的操作进行二次确认。',
    imports: ['Popconfirm', 'Button'],
    variants: ['基础确认', '自定义按钮', '异步确认', '不同方向'],
    basic: `<Popconfirm title="确认删除该记录？" description="删除后无法恢复。"><Button danger>删除</Button></Popconfirm>`,
    advanced: `<Popconfirm title="确认停用该账户？" okText="确认停用" cancelText="取消"><Button>停用账户</Button></Popconfirm>`,
  },
  {
    name: 'Progress',
    title: 'Progress 进度条',
    category: '反馈',
    spec: '反馈/AntdProgress.md',
    summary: '用于展示操作进度、完成比例或状态。',
    variants: ['线形', '圆形', '仪表盘', '步骤进度'],
    basic: `<Progress percent={68} />`,
    advanced: `<Space><Progress type="circle" percent={75} size={80} /><Progress type="dashboard" percent={42} size={80} status="exception" /></Space>`,
  },
  {
    name: 'Result',
    title: 'Result 结果',
    category: '反馈',
    spec: '反馈/AntdResult.md',
    summary: '用于展示任务完成后的明确结果。',
    imports: ['Result', 'Button'],
    variants: ['成功', '错误', '警告', '信息', '自定义状态'],
    basic: `<Result status="success" title="审批提交成功" subTitle="审批编号：AP-20260001" extra={<Button type="primary">返回列表</Button>} />`,
    advanced: `<Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />`,
  },
  {
    name: 'Skeleton',
    title: 'Skeleton 骨架屏',
    category: '反馈',
    spec: '反馈/AntdSkeleton.md',
    summary: '用于内容加载期间保持页面结构稳定。',
    variants: ['基础骨架', '头像', '按钮', '输入框', '加载切换'],
    basic: `<Skeleton active />`,
    advanced: `<Space direction="vertical"><Skeleton.Avatar active /><Skeleton.Input active /><Skeleton.Button active /></Space>`,
  },
  {
    name: 'Spin',
    title: 'Spin 加载中',
    category: '反馈',
    spec: '反馈/AntdSpin.md',
    summary: '用于表示局部或容器内容正在加载。',
    variants: ['基础加载', '不同尺寸', '容器加载', '延迟显示'],
    basic: `<Spin />`,
    advanced: `<Spin spinning tip="正在加载客户数据..."><div style={{ padding: 32, background: '#f4f6f8' }}>客户详情内容</div></Spin>`,
  },
  {
    name: 'Layout',
    title: 'Layout 布局',
    category: '导航',
    spec: '全局规范/AntdLayout.md',
    summary: '用于构建企业后台的页面整体骨架。',
    variants: ['顶部布局', '侧边布局', '顶侧布局', '可折叠侧栏'],
    basic: `<Layout style={{ minHeight: 180 }}><Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header><Layout.Content style={{ padding: 24 }}>内容区</Layout.Content></Layout>`,
    advanced: `<Layout style={{ minHeight: 220 }}><Layout.Sider width={160}>侧边导航</Layout.Sider><Layout><Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header><Layout.Content style={{ padding: 24 }}>内容区</Layout.Content></Layout></Layout>`,
  },
  {
    name: 'Pagination',
    title: 'Pagination 分页',
    category: '导航',
    spec: '导航组件/pagination-Style-Spec.md',
    summary: '用于在大量列表数据之间切换页面。',
    variants: ['基础分页', '完整分页', '小尺寸', '简洁模式'],
    basic: `<Pagination defaultCurrent={1} total={120} />`,
    advanced: `<Space direction="vertical"><Pagination showSizeChanger showQuickJumper total={500} /><Pagination size="small" simple total={120} /></Space>`,
  },
  {
    name: 'Tabs',
    title: 'Tabs 标签页',
    category: '导航',
    spec: '导航组件/tabs-Style-Spec.md',
    summary: '用于在同一层级的内容视图之间切换。',
    variants: ['一级标签', '二级卡片标签', '可编辑标签', '禁用状态'],
    basic: `<Tabs items={[{ key: '1', label: '客户概览', children: '客户概览内容' }, { key: '2', label: '资产持仓', children: '资产持仓内容' }]} />`,
    advanced: `<Tabs type="card" items={[{ key: '1', label: '待处理', children: '待处理任务' }, { key: '2', label: '已完成', children: '已完成任务' }, { key: '3', label: '已关闭', disabled: true, children: '' }]} />`,
  },
  {
    name: 'Steps',
    title: 'Steps 步骤条',
    category: '导航',
    spec: '导航组件/steps-Style-Spec.md',
    summary: '用于展示任务流程、当前进度和状态。',
    variants: ['水平步骤', '竖向步骤', '小尺寸', '状态步骤'],
    basic: `<Steps current={1} items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]} />`,
    advanced: `<Steps direction="vertical" size="small" current={1} items={[{ title: '申请已提交', description: '2026-06-12 09:00' }, { title: '审批处理中', description: '等待负责人审批' }, { title: '审批完成' }]} />`,
  },
  {
    name: 'Breadcrumb',
    title: 'Breadcrumb 面包屑',
    category: '导航',
    spec: '导航组件/breadcrumb-Style-Spec.md',
    summary: '用于展示当前页面在信息层级中的位置。',
    variants: ['基础路径', '带链接', '下拉菜单', '自定义分隔符'],
    basic: `<Breadcrumb items={[{ title: '客户管理' }, { title: '客户列表' }, { title: '客户详情' }]} />`,
    advanced: `<Breadcrumb separator=">" items={[{ title: <a href="#">首页</a> }, { title: <a href="#">审批中心</a> }, { title: '审批详情' }]} />`,
  },
  {
    name: 'Anchor',
    title: 'Anchor 锚点',
    category: '导航',
    spec: '导航组件/anchor-Style-Spec.md',
    summary: '用于长页面内快速定位不同内容区块。',
    variants: ['基础锚点', '水平锚点', '滚动容器', '自定义高亮'],
    basic: `<Anchor items={[{ key: 'basic', href: '#basic', title: '基本信息' }, { key: 'asset', href: '#asset', title: '资产信息' }, { key: 'risk', href: '#risk', title: '风险信息' }]} />`,
    advanced: `<Anchor direction="horizontal" items={[{ key: 'overview', href: '#overview', title: '概览' }, { key: 'detail', href: '#detail', title: '详情' }]} />`,
  },
  {
    name: 'BackTop',
    title: 'BackTop 回到顶部',
    category: '导航',
    spec: '导航组件/backtop-Style-Spec.md',
    summary: '用于长页面快速返回顶部。',
    imports: ['FloatButton'],
    typeName: 'FloatButtonProps',
    variants: ['基础回顶', '自定义可见高度', '自定义位置'],
    basic: `<div style={{ height: 120, overflow: 'auto' }}><div style={{ height: 360 }}>滚动区域示例</div><FloatButton.BackTop /></div>`,
    advanced: `<FloatButton.BackTop visibilityHeight={100} />`,
  },
];

const renderVariants = (variants) => variants.map((item) => `- ${item}`).join('\n');

export const renderComponentDocLegacy = (doc, order) => {
  const imports = doc.imports ?? [doc.name, 'Space'];
  const propsType = doc.typeName ?? `${doc.name}Props`;
  const extraImports = doc.extraImports ? `${doc.extraImports}\n` : '';

  return `---
title: ${doc.title}
order: ${order}
---

# ${doc.title}

${doc.summary}

\`${doc.name}\` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：\`${doc.spec}\`。

## 组件类型

${renderVariants(doc.variants)}

## 基础用法

\`\`\`tsx
import { ConfigProvider, ${imports.join(', ')} } from 'privatebank-design';
${extraImports}
export default () => (
  <ConfigProvider>
    ${doc.basic}
  </ConfigProvider>
);
\`\`\`

## 常用类型与状态

\`\`\`tsx
import { ConfigProvider, ${imports.join(', ')} } from 'privatebank-design';
${extraImports}
export default () => (
  <ConfigProvider>
    ${doc.advanced}
  </ConfigProvider>
);
\`\`\`

## API 与类型

组件 Props 完全继承 antd，可直接从 \`privatebank-design\` 导入：

\`\`\`tsx | pure
import type { ${propsType} } from 'privatebank-design';
\`\`\`

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
`;
};
