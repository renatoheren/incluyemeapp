import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from './pages/MainView';
import LoginView from './pages/LoginView';
import MenuView from './pages/MenuView';
import CursosView from './pages/CursosView';
import HorarioDiaView from './pages/HorarioDiaView';
import HorarioView from './pages/HorarioView';
import NotasView from './pages/NotasView';
import PagosPendientesView from './pages/PagosPendientesView';
import PagosRealizadosView from './pages/PagosRealizadosView';
import PagosView from './pages/PagosView';
import AuthLoadingView from './pages/AuthLoadingView';

const AppStack = createStackNavigator({ 
  Menu: { screen: MenuView },
  Cursos: { screen: CursosView },
  Horario: { screen: HorarioView },
  HorarioDia: { screen: HorarioDiaView },
  Notas: { screen: NotasView },
  PagosPendientes: { screen: PagosPendientesView },
  PagosRealizados: { screen: PagosRealizadosView },
  Pagos: { screen: PagosView }
}, {
  headerMode: 'none',
});
const AuthStack = createStackNavigator({ 
  Main: { screen: MainView },
  Login: { screen: LoginView },
 }, {
  headerMode: 'none',
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingView,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);