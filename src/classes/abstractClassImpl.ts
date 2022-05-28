/**
 * Class extending Abstract class and implementing methods and initialising properties
 */
class AbstractClassImpl extends AbstractClass {
  status = true;

  displayInfo(): void {
    console.log(this.status);
  }
}
