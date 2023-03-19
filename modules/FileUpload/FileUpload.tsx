"use client";

import { useReducer, Reducer } from "react";
import { useForm } from "react-hook-form";

import Form, { defaultValues } from "@/modules/Form";
import Metadata from "@/components/Metadata";
import Message from "@/components/Message";
import Button from "@/components/Button";

import upload from "./lib/upload";
import { reducer, initialState, State, ReducerActions } from "./lib/reducer";
import Spinner from "./components/Spinner";
import DragDropIcon from "./components/DragDropIcon";

type FileUploadProps = {};

const FileUpload = ({}: FileUploadProps) => {
  const [state, dispatch] = useReducer<Reducer<State, ReducerActions>>(reducer, initialState);
  const { dragOver, metadata, message, filePath, uploading } = state;
  const { getValues, control } = useForm({
    defaultValues,
  });

  const handleDrop = (evt: any) => {
    evt.preventDefault();
    if (!uploading) {
      upload(evt.dataTransfer.files[0], getValues(), dispatch);
    }
  };
  const handleFileChange = (evt: any) => {
    if (!uploading) {
      upload(evt.target.files[0], getValues(), dispatch);
    }
  };

  const handleDragEnter = () => dispatch({ type: "SET_DRAG_OVER", payload: true });
  const handleDragLeave = () => dispatch({ type: "SET_DRAG_OVER", payload: false });
  const handleDragOver = (evt: any) => evt.preventDefault();

  return metadata ? (
    <>
      <div className="text-center mt-6">
        <Button href={filePath}>Download icons</Button>
      </div>
      <Metadata json={metadata} />
    </>
  ) : (
    <>
      <label
        className={`flex justify-center items-center w-full mt-10 mb-4 p-6 border ${
          dragOver ? "border-solid" : "border-dashed"
        } rounded-md ease-in-out transition-boder duration-300`}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        htmlFor="icon"
      >
        <div className="flex flex-col items-center justify-center">
          <DragDropIcon uploading={uploading} />
          <p className={`mt-2 text-xs text-slate-400 text-center pointer-events-none ${uploading ? "opacity-30" : ""}`}>
            drop your favicon/app icon here
            <br />
            (optimal: 512x512px; max. 1MB; png,jpg or gif)
          </p>
          {uploading && (
            <div className="grid grid-cols-[auto_16px] gap-x-2 items-center mt-4 w-full">
              <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full animate-progress" />
              </div>
              <Spinner />
            </div>
          )}
        </div>
        <input
          className="hidden"
          id="icon"
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/jpg, image/gif"
        />
      </label>
      <Form control={control} />
      {message.text ? <Message type={message.type}>{message.text}</Message> : null}
    </>
  );
};

export default FileUpload;
