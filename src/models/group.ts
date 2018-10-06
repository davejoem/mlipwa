import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Schema } from 'mongoose'
import { Mlipia } from '../server'

export class Group extends Typegoose {
  private model: any
  private mlipia: Mlipia

  constructor(mlipia: Mlipia) {
    super();
    this.mlipia = mlipia
    this.model = this.createModel()
  }

  public createModel() {
    this.getModelForClass(this)
  }

  @prop()
  name: string

  @prop()
  rights: string[]

  @prop()
  users: typeof Schema.Types.ObjectId[]

  public find(): any {

  }

}

// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new GroupModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await GroupModel.findOne();

//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();