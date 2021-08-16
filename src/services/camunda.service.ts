import CamundaRoutes from '../services/camunda.routes';
export default class CamundaService{
  static getProcessInstance(orderId = null){
    return fetch(CamundaRoutes.getProcessInstancePath())
      .then(response => response.json());
  }

  static getActivityList(processInstanceId: string){
    return fetch(CamundaRoutes.getProcessInstanceActivityListPath(processInstanceId))
      .then(response => response.json());
  }
}