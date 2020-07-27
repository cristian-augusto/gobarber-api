import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmetDTO from '../dto/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../dto/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmetDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
