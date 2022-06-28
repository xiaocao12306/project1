import gridIcon1 from './assets/icons/grid/1.svg'
import gridIcon2 from './assets/icons/grid/2.svg'
import gridIcon3 from './assets/icons/grid/3.svg'
import gridIcon4 from './assets/icons/grid/4.svg'
import gridIcon5 from './assets/icons/grid/5.svg'
import gridIcon6 from './assets/icons/grid/6.svg'
import gridIcon7 from './assets/icons/grid/7.svg'
import gridIcon8 from './assets/icons/grid/8.svg'
import box from './assets/icons/card_title/box.svg'
import briefcase from './assets/icons/card_title/briefcase.svg'
import notification from './assets/icons/card_title/notification-status.svg'
import star from './assets/icons/card_title/star.svg'
import complaints from './assets/icons/todo/complaints.svg'
import todo from './assets/icons/todo/do.svg'
import fix from './assets/icons/todo/fix.svg'
import things from './assets/icons/todo/things.svg'
import main from './assets/icons/tabmain_btn/nav_icon.svg'
import buliding from './assets/icons/tabbar/buliding.svg'
import bag from './assets/icons/tabbar/bag.svg'
import message from './assets/icons/tabbar/message.svg'
import user from './assets/icons/tabbar/user.svg'

export const svericeList = [
  {title:'业主服务跟进(次)',count:88},
  {title:'巡更次数(次)',count:182},
  {title:'社区消毒(次)',count:164},
  {title:'电梯保养(次)',count:2},
]

export const helpList = [
  {
    title:'【装修登记】一篇文章告诉你家里装修，如何在社区内登记！',
    updateTime:'2021-3-17 12:23:54',
    views:236
  },
  {
    title:'【宠物登记】在社区养宠物一定要登记哦！',
    updateTime:'2021-3-17 12:23:54',
    views:236
  },
  {
    title:'【居住证办理】不知道怎么办居住证？《街道直通车》来啦！',
    updateTime:'2021-3-17 12:23:54',
    views:236
  },
]

export const rate = {
  count: 4.8,
  rateCount:4543,
  details:[
    {
      name:'5分',
      process:85,
      count:115
    },
    {
      name:'4分',
      process:45,
      count:115
    },
    {
      name:'3分',
      process:30,
      count:115
    },
    {
      name:'2分',
      process:10,
      count:10
    },
    {
      name:'1分',
      process:0,
      count:0
    },
  ]
}
export const communityList = [
	{name:'美林湖',id:0},
	{name:'美丽家园',id:1},
	{name:'翻斗花园',id:2},
	{name:'可爱多小区',id:3},
]
export const icons = {
	gridIcon: {
		gridIcon1,
		gridIcon2,
		gridIcon3,
		gridIcon4,
		gridIcon5,
		gridIcon6,
		gridIcon7,
		gridIcon8,
	},
	cardIcon: {
		box,
		briefcase,
		notification,
		star
	},
	todoIcon: {
		complaints,
		todo,
		fix,
		things
	},
	tabbar: {
		main,
		buliding,
		bag,
		message,
		user
	}
}