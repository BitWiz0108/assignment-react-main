export interface ICardDetail {
  label: string;
  value: number;
  percent: number;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export interface IMember {
  name: string;
  id: number;
  image: string;
}

export interface ITaskData {
  task: string;
  value: number;
  due: Date;
  members: IMember[];
  progress: number;
}
export interface ITaskList {
  header: string[];
  data: ITaskData[];
}

export interface IEmployData {
  name: string;
  image: string;
  email: string;
  role: string;
  status: string;
  id: string;
}
export interface IEmployList {
  header: string[];
  data: IEmployData[];
}
export interface IEmployPayroll {
  label: string;
  value: number;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}
export interface IScheduleHeader {
  name: string;
  id: number;
}
export interface IScheduleDetail {
  label: string | null;
  status: string | null;
}
export interface IScheduleData {
  time: string;
  detail: IScheduleDetail[];
}
export interface ISchedule {
  header: IScheduleHeader[];
  data: IScheduleData[];
}
