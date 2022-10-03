import React, { Component, useEffect, useRef, useState } from 'react';
import { FieldContainer, FieldDescription, FieldLabel, TextInput } from '@keystone-ui/fields';
import { CellLink, CellContainer } from '@keystone-6/core/admin-ui/components';
import FormData from 'form-data'
import {
    CardValueComponent,
    CellComponent,
    FieldController,
    FieldControllerConfig,
    FieldProps,
} from '@keystone-6/core/types';
import axios from "axios"

export function Field({ field, value, onChange, autoFocus }: FieldProps<typeof controller>) {
    const disabled = onChange === undefined;

    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor }: any = editorRef.current || {}

    class UploadAdapter {
        loader
        constructor(loader: any) {
            this.loader = loader;
            this.upload = this.upload.bind(this)
            this.abort = this.abort.bind(this)
        }

        async upload() {
            const file = await this.loader.file
            const data = new FormData();
            data.append('file', file);
            const res = await axios.post('/upload-image', data, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            })
            return {
                default: res?.data.url
            }
        }

        abort() {
            // Reject promise returned from upload() method.
            console.log('abort')
        }
    }

    function MyCustomUploadAdapterPlugin(editor: any) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
            return new UploadAdapter(loader);
        };
    }

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        } as any
        setEditorLoaded(true)
    }, []);

    return (
        <FieldContainer as="fieldset">
            <FieldLabel>{field.label}</FieldLabel>
            <FieldDescription id={`${field.path}-description`}>{field.description}</FieldDescription>
            <div>
                {editorLoaded ? <CKEditor
                    editor={ClassicEditor}
                    data={value}
                    config={{
                        extraPlugins: [MyCustomUploadAdapterPlugin]
                    }}
                    onReady={(editor: any) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData()
                        onChange?.(data);
                    }}
                /> : <p>Loadding...</p>}
            </div>

        </FieldContainer>
    );
}

export const Cell: CellComponent = ({ item, field, linkTo }) => {
    let value = item[field.path] + '';
    return linkTo ? <CellLink {...linkTo}>{value}</CellLink> : <CellContainer>{value}</CellContainer>;
};
Cell.supportsLinkTo = true;

export const CardValue: CardValueComponent = ({ item, field }) => {
    return (
        <FieldContainer>
            <FieldLabel>{field.label}</FieldLabel>
            {item[field.path]}
        </FieldContainer>
    );
};

export const controller = (
    config: FieldControllerConfig<{}>
): FieldController<string | null, string> => {
    return {
        path: config.path,
        label: config.label,
        description: config.description,
        graphqlSelection: config.path,
        // test1: 'asdganjsdyfadtrsad',
        defaultValue: null,
        deserialize: data => {
            const value = data[config.path];
            return typeof value === 'string' ? value : null;
        },
        serialize: value => ({ [config.path]: value }),
        filter: {
            Filter(props) {
                console.log({props})
                return (
                    <TextInput
                        type="text"
                        onChange={event => {
                            props.onChange(event.target.value);
                        }}
                        value={props.value}
                        autoFocus={props.autoFocus}
                    />
                    // <div></div>
                );
            },

            graphql: ({ type, value }) => {
                const key = type === 'is' ? config.path : `${config.path}_${type}`;
                const valueWithoutWhitespace = value.replace(/\s/g, '');

                return {
                    [key]: ['in', 'not_in'].includes(type)
                        ? valueWithoutWhitespace.split(',').map(i => parseInt(i))
                        : parseInt(valueWithoutWhitespace),
                };
            },
            Label({ label, value, type }) {
                let renderedValue = value;
                if (['in', 'not_in'].includes(type)) {
                    renderedValue = value
                        .split(',')
                        .map(value => value.trim())
                        .join(', ');
                }
                return `${label.toLowerCase()}: ${renderedValue}`;
            },
            types: {
                is: {
                    label: 'Is exactly',
                    initialValue: '',
                },
                not: {
                    label: 'Is not exactly',
                    initialValue: '',
                },
                gt: {
                    label: 'Is greater than',
                    initialValue: '',
                },
                lt: {
                    label: 'Is less than',
                    initialValue: '',
                },
                gte: {
                    label: 'Is greater than or equal to',
                    initialValue: '',
                },
                lte: {
                    label: 'Is less than or equal to',
                    initialValue: '',
                },
                in: {
                    label: 'Is one of',
                    initialValue: '',
                },
                not_in: {
                    label: 'Is not one of',
                    initialValue: '',
                },
            },
        },
    };
};
