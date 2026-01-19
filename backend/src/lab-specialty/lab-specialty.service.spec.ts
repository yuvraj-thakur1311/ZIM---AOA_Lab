import { Test, TestingModule } from '@nestjs/testing';
import { LabSpecialtyService } from './lab-specialty.service';

describe('LabSpecialtyService', () => {
  let service: LabSpecialtyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabSpecialtyService],
    }).compile();

    service = module.get<LabSpecialtyService>(LabSpecialtyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
