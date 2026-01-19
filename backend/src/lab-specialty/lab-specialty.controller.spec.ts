import { Test, TestingModule } from '@nestjs/testing';
import { LabSpecialtyController } from './lab-specialty.controller';

describe('LabSpecialtyController', () => {
  let controller: LabSpecialtyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabSpecialtyController],
    }).compile();

    controller = module.get<LabSpecialtyController>(LabSpecialtyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
