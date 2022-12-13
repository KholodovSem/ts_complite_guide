import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'Sem', age: 22 });
const userEdit = new UserEdit(document.getElementById('root')!, user);
userEdit.render();
