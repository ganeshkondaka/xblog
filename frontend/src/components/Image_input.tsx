export const Image_input = () => {
    return (
        <div>

            <div className="flex items-center justify-center w-full mb-3">
                <label htmlFor="dropzone-file" className=" p-2 mt-5 flex flex-col items-center justify-center w-full md:w-[50%] h-36 md:h-28 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-300 dbg-gray-300  dark:hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <img src="../upload-cloud.png" alt="upload" className="w-5 h-5 text-gray-400"/>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"> <span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>

        </div>
    )
}
