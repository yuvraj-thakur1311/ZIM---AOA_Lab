import { Test, TestingModule } from '@nestjs/testing';
import { LabStaffController } from './lab-staff.controller';

describe('LabStaffController', () => {
  let controller: LabStaffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabStaffController],
    }).compile();

    controller = module.get<LabStaffController>(LabStaffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
