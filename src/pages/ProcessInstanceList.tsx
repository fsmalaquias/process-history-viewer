import React, {useState, useEffect} from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import TopMenu from '../components/TopMenu';
import CamundaService from '../services/camunda.service';
import Utils from "../utils/utils";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Link, Switch
} from "react-router-dom";
import { SortBy, SortOrder } from '../services/camunda.enum';

interface SortOrderButtonInterface{
  sortOrder: SortOrder;
  onClick: any;
}

const SortOrderButton = (props: SortOrderButtonInterface) => {
  const sortOrder = props.sortOrder;
  return (
    <Button variant="light" size="sm" onClick={props.onClick}>
      {sortOrder === SortOrder.Ascending ? <FaChevronUp /> : <FaChevronDown />}
    </Button>
  )
}

export default function ProcessInstanceList(){
  const [processList, setProcessList] = useState([]);
  const [sortBy, setSortBy] = useState(SortBy.StartTime);
  const [sortOrder, setSortOrder] = useState(SortOrder.Descending);
  const [sortOrderStartTime, setSortOrderStartTime] = useState(SortOrder.Descending);
  const [sortOrderEndTime, setSortOrderEndTime] = useState(SortOrder.Descending);
  const [sortOrderDuration, setSortOrderDuration] = useState(SortOrder.Descending);

  const toggleSortOrder = (_sortBy: SortBy) => {
    // console.log(sortBy, orderBy);
    setSortBy(_sortBy);
    switch (sortBy) {
      case SortBy.StartTime: {
        setSortOrderStartTime(sortOrderStartTime === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending);
        setSortOrder(sortOrderStartTime);
        break;
      }
      case SortBy.EndTime: {
        setSortOrderEndTime(sortOrderEndTime === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending);
        setSortOrder(sortOrderEndTime);
        break;
      }
      case SortBy.Duration: {
        setSortOrderDuration(sortOrderDuration === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending);
        setSortOrder(sortOrderDuration);
        break;
      }
      default:
        break;
    }

    console.log(sortBy, sortOrder);
    
  }

  useEffect(() => {
    const getProcessInstance = async () => {
      const resProcessInstance:any = await CamundaService.getProcessInstance('', sortBy, sortOrder);
      setProcessList(resProcessInstance);
    }

    getProcessInstance();
  }, [sortBy, sortOrder])

  return (
    <>
      <TopMenu />
      <Container>
        <h2>Process Instances ({processList.length})</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Process Instance ID</th>
              <th>Business Key</th>
              <th><SortOrderButton sortOrder={sortOrderStartTime} onClick={() => toggleSortOrder(SortBy.StartTime)} /> Start</th>
              <th><SortOrderButton sortOrder={sortOrderEndTime} onClick={() => toggleSortOrder(SortBy.EndTime)} /> End</th>
              <th><SortOrderButton sortOrder={sortOrderDuration} onClick={() => toggleSortOrder(SortBy.Duration)} /> Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {processList.map((item:any) => {
              return (
                <tr key={item.id}>
                  <td><Link to={`/${item.id}/${item.businessKey}`}>{item.id}</Link></td>
                  <td>{item.businessKey}</td>
                  <td>{Utils.formatDate(item.startTime)}</td>
                  <td>{Utils.formatDate(item.endTime)}</td>
                  <td style={{textAlign: 'right'}}>{item.durationInMillis/1000}s</td>
                  <td>{item.state}</td>
                </tr>
              )
            })}
            
          </tbody>
        </Table>
      </Container>
    </>
  )
}