import mqtt from 'mqtt';
import EventManagerSingleton from '../../../src/UseCases/EventManagementComponent/EventManagerSingleton';
import {constants} from './constants';

const client = mqtt.connect('mqtt://127.0.0.1:1883', {
  clientId: "dmdPlugin",
  username: "saugatdai",
  password: "NamahShivaya:-)"
});

client.on('connect', () => {
  console.log('MQTT Client AUDIODMD Plugin Connected successfully to broker');
});

EventManagerSingleton.getInstance().on(constants.DMD_PUBLISH, (payload) => {
    console.log(payload);
    client.publish("dmd", JSON.stringify(payload));
});

export default client;