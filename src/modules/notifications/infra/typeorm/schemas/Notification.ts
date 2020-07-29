import { ObjectID } from 'typeorm';

class Notification {
  id: ObjectID;

  content: string;
}

export default Notification;
