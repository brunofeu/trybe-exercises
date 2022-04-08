  // src/Services/Frame.ts

  import Frame, { FrameSchema } from '../Interfaces/Frame';
  import Service, { ServiceError } from '.';
  import FrameModel from '../Models/Frame';

  class FrameService extends Service<Frame> {
    constructor(model = new FrameModel()) {
      super(model);
    }
    //somente o create é declarado aqui pois os outros métodos mantém o padrão.
    //o create tem a variação abaixo, então precisa ser modificado na subclasse
    create = async (obj: Frame): Promise<Frame | ServiceError | null> => {
      const parsed = FrameSchema.safeParse(obj);
      if (!parsed.success) {
        return { error: parsed.error };
      }
      return this.model.create(obj);
    };
  }

  export default FrameService;