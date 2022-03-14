import CamundaRoutes from '../services/camunda.routes';
import AlertService from './alert.service';
import { SortBy, SortOrder } from './camunda.enum';

export default class CamundaService {

  static getProcessInstance(orderId: string = '', sortBy: SortBy = SortBy.StartTime, sortOrder: SortOrder = SortOrder.Descending) {
    return fetch(CamundaRoutes.getProcessInstancePath(orderId, sortBy, sortOrder))
      .then(response => response.json()).catch(err => {
        console.error(err);
        AlertService.error('Error', 'Error to get process instaces list');
      });
  }

  static getActivityList(processInstanceId: string, sortBy: SortBy = SortBy.StartTime, sortOrder: SortOrder = SortOrder.Descending) {
    return fetch(CamundaRoutes.getProcessInstanceActivityListPath(processInstanceId))
      .then(response => response.json()).catch(err => {
        console.error(err);
        AlertService.error('Error', 'Error to get activities list');
      });
  }

  static getProcessInstanceVariables(processInstanceId: string) {
    return fetch(CamundaRoutes.getProcessInstanceVariablesPath(processInstanceId))
      .then(response => response.json()).catch(err => {
        console.error(err);
        AlertService.error('Error', 'Error to get variables list');
      });
  }

}