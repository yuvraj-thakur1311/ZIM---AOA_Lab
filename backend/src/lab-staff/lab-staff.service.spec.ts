import { Test, TestingModule } from '@nestjs/testing';
import { LabStaffService } from './lab-staff.service';

describe('LabStaffService', () => {
  let service: LabStaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabStaffService],
    }).compile();

    service = module.get<LabStaffService>(LabStaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
