/**
 * Class extending Abstract class and implementing methods and initialising properties
 */
class abstractClassImpl extends abstractClass {
  status = true;

  displayInfo(): void {
    console.log(this.status);
  }
}
