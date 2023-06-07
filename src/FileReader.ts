export class FileReader {
  private inputFIle: string;
  private outputFile: string;

  constructor(inputFile: string, outputFile: string) {
    this.inputFIle = inputFile;
    this.outputFile = outputFile;
  }

  get inputFile() {
    return this.inputFIle;
  }

  convert(): void {

    
  }
}
