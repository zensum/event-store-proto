import * as $protobuf from "protobufjs";

/** Namespace se. */
export namespace se {

    /** Namespace zensum. */
    namespace zensum {

        /** Namespace event_store_proto. */
        namespace event_store_proto {

            /** Properties of a Response. */
            interface IResponse {

                /** Response data */
                data?: Uint8Array[];
            }

            /** Represents a Response. */
            class Response {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: se.zensum.event_store_proto.IResponse);

                /** Response data. */
                public data: Uint8Array[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: se.zensum.event_store_proto.IResponse): se.zensum.event_store_proto.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link se.zensum.event_store_proto.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: se.zensum.event_store_proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link se.zensum.event_store_proto.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: se.zensum.event_store_proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): se.zensum.event_store_proto.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): se.zensum.event_store_proto.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): se.zensum.event_store_proto.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: se.zensum.event_store_proto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Event. */
            interface IEvent {

                /** Event topic */
                topic?: string;

                /** Event key */
                key?: string;

                /** Event data */
                data?: Uint8Array[];
            }

            /** Represents an Event. */
            class Event {

                /**
                 * Constructs a new Event.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: se.zensum.event_store_proto.IEvent);

                /** Event topic. */
                public topic: string;

                /** Event key. */
                public key: string;

                /** Event data. */
                public data: Uint8Array[];

                /**
                 * Creates a new Event instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Event instance
                 */
                public static create(properties?: se.zensum.event_store_proto.IEvent): se.zensum.event_store_proto.Event;

                /**
                 * Encodes the specified Event message. Does not implicitly {@link se.zensum.event_store_proto.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: se.zensum.event_store_proto.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link se.zensum.event_store_proto.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: se.zensum.event_store_proto.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): se.zensum.event_store_proto.Event;

                /**
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): se.zensum.event_store_proto.Event;

                /**
                 * Verifies an Event message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Event
                 */
                public static fromObject(object: { [k: string]: any }): se.zensum.event_store_proto.Event;

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @param message Event
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: se.zensum.event_store_proto.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Event to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ControlPacket. */
            interface IControlPacket {

                /** ControlPacket subscriptions */
                subscriptions?: se.zensum.event_store_proto.ControlPacket.ISubscription[];

                /** ControlPacket rewinds */
                rewinds?: se.zensum.event_store_proto.ControlPacket.IRewind[];
            }

            /** Represents a ControlPacket. */
            class ControlPacket {

                /**
                 * Constructs a new ControlPacket.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: se.zensum.event_store_proto.IControlPacket);

                /** ControlPacket subscriptions. */
                public subscriptions: se.zensum.event_store_proto.ControlPacket.ISubscription[];

                /** ControlPacket rewinds. */
                public rewinds: se.zensum.event_store_proto.ControlPacket.IRewind[];

                /**
                 * Creates a new ControlPacket instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ControlPacket instance
                 */
                public static create(properties?: se.zensum.event_store_proto.IControlPacket): se.zensum.event_store_proto.ControlPacket;

                /**
                 * Encodes the specified ControlPacket message. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.verify|verify} messages.
                 * @param message ControlPacket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: se.zensum.event_store_proto.IControlPacket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ControlPacket message, length delimited. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.verify|verify} messages.
                 * @param message ControlPacket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: se.zensum.event_store_proto.IControlPacket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ControlPacket message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ControlPacket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): se.zensum.event_store_proto.ControlPacket;

                /**
                 * Decodes a ControlPacket message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ControlPacket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): se.zensum.event_store_proto.ControlPacket;

                /**
                 * Verifies a ControlPacket message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ControlPacket message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ControlPacket
                 */
                public static fromObject(object: { [k: string]: any }): se.zensum.event_store_proto.ControlPacket;

                /**
                 * Creates a plain object from a ControlPacket message. Also converts values to other types if specified.
                 * @param message ControlPacket
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: se.zensum.event_store_proto.ControlPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ControlPacket to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ControlPacket {

                /** Properties of a Subscription. */
                interface ISubscription {

                    /** Subscription topic */
                    topic?: string;

                    /** Subscription keysToAdd */
                    keysToAdd?: string[];

                    /** Subscription keysToRemove */
                    keysToRemove?: string[];
                }

                /** Represents a Subscription. */
                class Subscription {

                    /**
                     * Constructs a new Subscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: se.zensum.event_store_proto.ControlPacket.ISubscription);

                    /** Subscription topic. */
                    public topic: string;

                    /** Subscription keysToAdd. */
                    public keysToAdd: string[];

                    /** Subscription keysToRemove. */
                    public keysToRemove: string[];

                    /**
                     * Creates a new Subscription instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Subscription instance
                     */
                    public static create(properties?: se.zensum.event_store_proto.ControlPacket.ISubscription): se.zensum.event_store_proto.ControlPacket.Subscription;

                    /**
                     * Encodes the specified Subscription message. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.Subscription.verify|verify} messages.
                     * @param message Subscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: se.zensum.event_store_proto.ControlPacket.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Subscription message, length delimited. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.Subscription.verify|verify} messages.
                     * @param message Subscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: se.zensum.event_store_proto.ControlPacket.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Subscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): se.zensum.event_store_proto.ControlPacket.Subscription;

                    /**
                     * Decodes a Subscription message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): se.zensum.event_store_proto.ControlPacket.Subscription;

                    /**
                     * Verifies a Subscription message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Subscription
                     */
                    public static fromObject(object: { [k: string]: any }): se.zensum.event_store_proto.ControlPacket.Subscription;

                    /**
                     * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                     * @param message Subscription
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: se.zensum.event_store_proto.ControlPacket.Subscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Subscription to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Rewind. */
                interface IRewind {

                    /** Rewind topic */
                    topic?: string;

                    /** Rewind keys */
                    keys?: string[];

                    /** Rewind fromStart */
                    fromStart?: boolean;

                    /** Rewind maxEvents */
                    maxEvents?: number;
                }

                /** Represents a Rewind. */
                class Rewind {

                    /**
                     * Constructs a new Rewind.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: se.zensum.event_store_proto.ControlPacket.IRewind);

                    /** Rewind topic. */
                    public topic: string;

                    /** Rewind keys. */
                    public keys: string[];

                    /** Rewind fromStart. */
                    public fromStart: boolean;

                    /** Rewind maxEvents. */
                    public maxEvents: number;

                    /**
                     * Creates a new Rewind instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rewind instance
                     */
                    public static create(properties?: se.zensum.event_store_proto.ControlPacket.IRewind): se.zensum.event_store_proto.ControlPacket.Rewind;

                    /**
                     * Encodes the specified Rewind message. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.Rewind.verify|verify} messages.
                     * @param message Rewind message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: se.zensum.event_store_proto.ControlPacket.IRewind, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rewind message, length delimited. Does not implicitly {@link se.zensum.event_store_proto.ControlPacket.Rewind.verify|verify} messages.
                     * @param message Rewind message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: se.zensum.event_store_proto.ControlPacket.IRewind, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rewind message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rewind
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): se.zensum.event_store_proto.ControlPacket.Rewind;

                    /**
                     * Decodes a Rewind message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rewind
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): se.zensum.event_store_proto.ControlPacket.Rewind;

                    /**
                     * Verifies a Rewind message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Rewind message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Rewind
                     */
                    public static fromObject(object: { [k: string]: any }): se.zensum.event_store_proto.ControlPacket.Rewind;

                    /**
                     * Creates a plain object from a Rewind message. Also converts values to other types if specified.
                     * @param message Rewind
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: se.zensum.event_store_proto.ControlPacket.Rewind, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Rewind to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
