import {
	createApp
} from 'vue'
import App from './App.vue'
import {
	Rate,
	Progress,
	Icon,
	Popup,
	Swipe,
	SwipeItem,
	Grid,
	GridItem,
	RadioGroup, Radio, Cell, CellGroup,
	Image as VanImage 
} from 'vant';
const app = createApp(App)

app
	.use(Icon)
	.use(Rate)
	.use(Popup)
	.use(Swipe)
	.use(SwipeItem)
	.use(Grid)
	.use(GridItem)
	.use(Progress)
	.use(RadioGroup)
	.use(Radio)
	.use(Cell)
	.use(CellGroup)
	.use(VanImage )
	.mount('#app')