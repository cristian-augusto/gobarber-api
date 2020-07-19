import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmetDTO from '../dto/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmetDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
